# Error Collection
| Error Scenario  | Solution |
| ------------- | ------------- |
| Connect to multiple ssh hosts via Ansible | sudo vim etc/ansible/hosts |
| Ansible playbook hang on gathering facts  | ?  |
| All port access denied | add respective ports to the security group |
| CouchDB can't be accessed remotely | modify /etc/couchdb/local.ini, add 
										bind_address = 0.0.0.0 |