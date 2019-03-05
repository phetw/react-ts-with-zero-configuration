FROM node:alpine

# Install zero globally
RUN apk update && apk upgrade && apk add --no-cache python
RUN npm install --quiet --no-progress --unsafe-perm -g zero

# Add current folder to /app
ADD . /app

# Run zero in production mode
ENV NODE_ENV production

# Expose port
ENV PORT 80
EXPOSE 80

WORKDIR /app

CMD ["zero"]