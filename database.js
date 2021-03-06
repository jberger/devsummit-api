// @ts-check

const elasticsearch = require('elasticsearch');

module.exports = {
	getById,
};

const esClient = new elasticsearch.Client({
	host: process.env.ES_URL,
	log: 'warning',
});


async function getById(id) {
	const landing = await esClient.search({
		index: 'devsummit',
		type: 'meteorite_landing',
		body: {
			query: {
				match: {
					nasaId: id,
				}
			}
		}
	});
	return landing.hits.hits[0];
}

async function getImpacts(lat, lon, distance = 100) {
	const impacts = await esClient.search({
		index: 'devsummit',
		type: 'meteorite_landing',
		body: {
			query: {
				match: {
					nasaId: id,
				}
			}
		}
	});

	return impacts;
}