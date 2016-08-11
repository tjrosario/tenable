;
tenable.viewModels = tenable.viewModels || {};

tenable.viewModels.ConfigurationViewModel = function() {
  var self = this;
  self.configurations = ko.observableArray([]);
  self.isLoading = ko.observable();

  self.populateConfigurations = function(data) {
    self.configurations($.map(data, function(i) {
      return new tenable.models.ConfigurationModel(i); 
    }));
  };
};
