#!/bin/bash

#Ruichen Teng / tengr / 678693
#Tiehua Zhang / tiehuaz / 645227
#Chao Lin / clin2 / 658584
#Xueqiang Ma/ xueqiangm/ 668190
#Zheng Zheng/ zzheng2/ 651384

match=';port = 5984'
insert='port = 5984\nbind_address = 0.0.0.0'
file='/etc/couchdb/local.ini'

sudo service couchdb stop
sudo sed -i "s/$match/$match\n$insert/" $file
sudo service couchdb start