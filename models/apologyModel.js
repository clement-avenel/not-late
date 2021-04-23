var apologySchema = {
  type: 'object',
  properties: {
    message: { type: 'string', required: true },
    author: { type: 'string', required: true }
  }
}
module.exports = apologySchema;
