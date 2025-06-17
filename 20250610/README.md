# June 10, 2025 QNA

# Best Course of Actions After College

    - open source project contributions
    - personal projects
    - internships
    - networking

# lvl 2 project -> diabetes tracker -> project getting too big

    - focus on most important features for your MVP ( Minimal Viable Product )
    - Search
    - Macro tracker

# AI implementation

    - create chatbot ( RAG )

# Dev Environment

    - vscode
    - nvm | asdf
    - node
    - https://www.robinwieruch.de/mac-setup-web-development/

# where to put models

    /src/
      /components
      /services
      /assets/
      /models
        /user.ts
            ->
              class User {
                constructor(name, email) {
                  this.name = name
                  this.email = email
                  this.createdAt = new Date().toISOString()
                  this.updatedAt = new Date().toISOString()
                  this.deletedAt = null
                }

                asObject() {
                  return { ...this }
                }
              }

          /comment.ts
            ->
              class Comment {
                constructor(content) {
                  this.content = content
                  this.createdAt = new Date().toISOString()
                  this.updatedAt = new Date().toISOString()
                  this.deletedAt = null
                }
              }



              i.e. -> const user = new User('jay', 'jay@jay.jay')
