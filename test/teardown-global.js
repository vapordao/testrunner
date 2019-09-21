module.exports = async function() {
  const { OK } = Event;

  const {
    payload: {
      response: { id }
    }
  } = await global.client.once('api', OK);
  console.log(id, 'id-teardown');
  global.client.stop(id);
};
