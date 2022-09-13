if (process.platform !== "win32") return;
var injector = require("bindings")({
	bindings: "injector.node",
	module_root: __dirname,
});
module.exports = injector;
