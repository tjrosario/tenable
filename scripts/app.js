(function ($) {

  /**
   * App initializer
   *
   * @method init
   */
  function init() {
    var $configurations = $('#configurations');

    // attach Knockout bindings
    var ConfigurationsVM = new tenable.viewModels.ConfigurationViewModel();
    ko.applyBindings(ConfigurationsVM, $configurations[0]);

    ConfigurationsVM.isLoading(true);
    $.ajax({
      dataType: "json",
      url: 'dist/data/configurations.json',
      //url: '/request',
      success: function(data) {
        ConfigurationsVM.populateConfigurations(data.configurations);
        ConfigurationsVM.isLoading(false);
      }
    });
  }

  $(document).ready(init);

}(jQuery));
