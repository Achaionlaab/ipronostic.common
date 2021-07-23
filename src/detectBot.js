function detectBot(request){
	const userAgent = request.headers['user-agent'];
	return BOTS.find(({agent}) => userAgent.toLowerCase().includes(agent));
}

const BOTS = [
	{
		agent: 'googlebot',
		social: false,
	},
	{
		agent: 'whatsapp',
		social: true,
	},
	{
		agent: 'twitter',
		social: true,
	},
	{
		agent: 'facebook',
		social: true,
	},
];

detectBot.BOTS = BOTS;

module.exports = detectBot;