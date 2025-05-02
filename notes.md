bench --site all reinstall --yes
bench build
bench --site erpnext.localhost set-admin-password admin

bench new-site erpnext.localhost
bench get-app https://github.com/frappe/erpnext
bench --site erpnext.localhost install-app erpnext

# 1. Créer un nouveau site avec nom personnalisé de base de données
bench new-site erpnext.localhost --db-name evalerpnext

# 2. Télécharger l'application ERPNext
bench get-app https://github.com/frappe/erpnext

# 3. Installer ERPNext sur ton site
bench --site erpnext.localhost install-app erpnext

 eval "$(ssh-agent -s)"
  654  ssh-add ~/.ssh/id_github
  655  ssh -T git@github.com
  656  git remote set-url origin git@github.com:racedyy/eval2.git
  657  ssh -T git@github.com
  658  cat ~/.ssh/id_github.pub