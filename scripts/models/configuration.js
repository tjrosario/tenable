;
tenable.models = tenable.models || {};

tenable.models.ConfigurationModel = function(data) {
  this.name = data.name;
  this.hostname = data.hostname;
  this.port = data.port;
  this.username = data.username;
};
