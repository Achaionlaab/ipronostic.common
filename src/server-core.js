function serverCore() {
	const nodes = [];

	return function core(node, response) {
		if (node instanceof Function)
			nodes.push(node);
		else { // start execution
			Object.assign(node, REQUEST);
			Object.assign(response, RESPONSE);

			const execute = nodes.slice()
				.reverse()
				.reduce((next, node) =>
					(request, response) => node(
						request,
						response,
						() => (next || DEFAULT_NEXT)(request, response)
					)
				);

			const result = execute(node, response);
			if (result instanceof Promise)
				return result.finally(() => response.end());
			response.end();
		}
	};
};

module.exports = serverCore;

const DEFAULT_NEXT = () => 0;

const REQUEST = {
	userAgent() {
		return this.headers['user-agent'];
	},
};


const RESPONSE = {
};
