import { format } from 'date-fns';

export const formatLog = (tokens, req, res) => {
	const date = format(new Date(), 'dd/MM HH:mm:ss');

	return [
		'[\u001b[1m\x1b[37mREQ\u001b[0m]:',
		`\x1b[30m\u001b[1m${date.toString()}\x1b[37m\u001b[1m`,
		`\u001b[1m\x1b[37m${tokens.method(req, res)}\u001b[0m`,
		`\u001b[1m\x1b[37m${tokens.url(req, res)}\u001b[0m`,
		`\u001b[32m${tokens.status(req, res)}\u001b[37m\u001b[1m -`,
		`${tokens['response-time'](req, res)} ms\u001b[0m`
	].join(' ');
};
