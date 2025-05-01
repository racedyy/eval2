bench --site all reinstall --yes
bench build
bench --site erpnext.localhost set-admin-password admin

bench new-site erpnext.localhost
bench get-app https://github.com/frappe/erpnext
bench --site erpnext.localhost install-app erpnext

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