FROM node:lts as runner
WORKDIR /node-koajs
ENV NODE_ENV production
ARG COMMIT_ID
ENV COMMIT_ID=${COMMIT_ID}
COPY . .
RUN npm i koajs
EXPOSE 3000
CMD ["node", "app.js"]