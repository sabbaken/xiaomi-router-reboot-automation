FROM mcr.microsoft.com/playwright

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx playwright install

CMD [ "node", "index.js" ]
