# Error Collection
| Error Scenario  | Solution |
| ------------- | ------------- |
| Connect to multiple ssh hosts via Ansible | sudo vim etc/ansible/hosts |
| Ansible playbook hang on gathering facts  | ?  |
| All port access denied | add respective ports to the security group |
| CouchDB can't be accessed remotely | modify /etc/couchdb/local.ini, add bind_address = 0.0.0.0 |
| null key in from map/reduce result in couchdb | append "?group=True" to url |
| Effects not shown after modifying couchdb configuration file| Restart couchdb |