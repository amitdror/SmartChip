"# SmartChip" 

"# === Running App Local
"# 1. define jwtPrivateKey --> cmd -->set smartchip_jwtPrivateKey={}
"# 2. define emailUser --> cmd --> set smartchip_emailUser=<user>smart.chip.system.ltd@gmail.com
"# 3. define emailUser --> cmd --> set smartchip_emailPassword=<password>Backend123456

"# === Deply App using Heroku
"# 1. Open heroku user
"# 2. heroku config:smartchip_jwtPrivateKey=<privatekey>
"# 3. heroku config:set smartchip_db=mongodb://<smartchipUser>:<dbpassword>@ds161790.mlab.com:61790/smartchip
"# 4. heroku config:set smartchip_jwtPrivateKey=<privatekey>
"# 5. heroku config:set smartchip_emailUser=<user>smart.chip.system.ltd@gmail.com
"# 6. heroku config:set set smartchip_emailPassword=<password>Backend123456