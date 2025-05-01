frappe.pages['resetdata'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Data Reset',
		single_column: true
	});
}