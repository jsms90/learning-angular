# Setup
Use [the docs](https://docs.mongodb.com/v3.4/tutorial/install-mongodb-on-os-x/) but substitute in version 3.4.4.

```shell
brew update
curl -O https://fastdl.mongodb.org/osx/mongodb-osx-x86_64-3.4.4.tgz
tar -zxvf mongodb-osx-x86_64-3.4.4.tgz
mkdir -p mongodb
cp -R -n mongodb-osx-x86_64-3.4.4/ mongodb
```

Add `export PATH=<path>/bin:$PATH` to bashrc (or zshrc)

Run `source ~/.bashrc` in the terminal

Running `mongod` gives this error
```
exception in initAndListen: 29 Data directory /data/db not found., terminating
```

to solve:
```
cd /
sudo mkdir data && cd data
sudo mkdir db
sudo chmod 777 db
```

Install [MongoChef](https://studio3t.com/download/)

## Connect
