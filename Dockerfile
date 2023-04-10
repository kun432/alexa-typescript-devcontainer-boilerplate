FROM mcr.microsoft.com/devcontainers/base:jammy

RUN apt update -y \
    && apt install -y locales \
    && sed -i '/^#.* ja_JP.UTF-8 /s/^#//' /etc/locale.gen \
    && locale-gen \
    && ln -fs /usr/share/zoneinfo/Asia/Tokyo /etc/localtime\
    && dpkg-reconfigure -f noninteractive tzdata
ENV LANG="ja_JP.UTF-8"
ENV LANGUAGE="ja_JP:ja"
ENV LC_ALL="ja_JP.UTF-8"

RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \
    && unzip awscliv2.zip \
    && ./aws/install

ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID
ARG WORK_DIR=/workspace
RUN mkdir -p $WORK_DIR && chown $USER_UID:$USER_GID $WORK_DIR

USER vscode
SHELL [ "/bin/bash", "-c" ]

ENV NODE_VERSION 18.15.0
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash \
    && . $HOME/.nvm/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default \
    && npm install -g ask-cli

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/v$NODE_VERSION/bin:$PATH