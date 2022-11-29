# Marhaba-Livraison

______________________________________________________________

--------------------------> Docker <--------------------------

1-> INstallation :

 	Docker 
 	WLS 2
  
  2-> Création docker file : 

  Backend : 

	FROM node:14

	WORKDIR /app .

	COPY package.json .

	RUN npm install

	COPY . . 

	EXPOSE 5000

	CMD ["node", "index.js"]

	
  Frontend :

	FROM node:14

	WORKDIR /app .

	COPY package.json .

	RUN npm install

	COPY . . 

	EXPOSE 3000

	CMD ["npm", "start"]

3->Créer une image pour le backend et une autre pour le frontend à l'aide du commande :

	docker build -t backend . 
	docker build -t frontend .
	
4-> Créer une network qui s'appelle marhaba-livraison-net avec la commande : 
	
	docker network create marhaba-livraison-net 
	
5-> runner les container des deux images frontend et backend dans marhaba-livraison-net network :

	docker run --name frontend-container -p 3000:3000 --network marhaba-livraison-net -d frontend
	docker run --name "non du container" -p PORT:PORT --network "nom du network" -d "nom d'image"


______________________________________________________________

--------------------------> Testing <-------------------------

1-> installer les packages de Jest et de supertest : 

	npm i jest supertest


2-> créer un fichier qui s'appelle index.test.js 


3-> Dans le fichier point d'entré en ajoute un dernier ligne d'export :

	module.exports = app
 


4-> Dans le fichier index.test.js en import supertest et app qu'on a exporter du point d'entré :

	const supertest = require ('supertest');
	const app = require('./index')



5-> Créer la fonction prédéfini en jest "describe qui prend deux paramtre ('name ou commentaire', fonction)
	
		describe('login', ()=> {

    			test('login error email', async () => {
     			   const body = {

          			  email: 'jkhllhm@gmail.com',
          			  password: '123'

      			  }

        			const res = await supertest(app).post('/api/user/login').send(body);
   	   			expect(res.statusCode).toBe(400);
  			  })
			})


6-> Répétition du même fonctions sur la fonction du register 


7-> Pour exécuter le test : 

	npm test
