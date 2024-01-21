FROM node:18
WORKDIR /usr/src/app

# Copy root package.json and yarn.lock for workspace
COPY package.json yarn.lock ./

# Copy shared library
COPY libs/logs libs/logs

# Copy api and its package.json
COPY apps/api apps/api

# Install all dependencies in the context of the workspace
RUN yarn install --frozen-lockfile --non-interactive

# Build the shared library
RUN cd libs/logs && yarn build

EXPOSE 3000
CMD ["yarn", "start"]