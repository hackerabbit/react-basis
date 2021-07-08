const postListFilter = {
    fields: ['id', 'title', 'author', 'vote', 'updateAt'],
    limit: 10,
    order: "updateAt DESC",
    include: "authorPointer",
    includefilter: {
        user: {
            fields: [
                "id", "username"
            ]
        }
    }
}


const postByIdFilter = id => ({
    fields: ["id", "title", "author", "vote", "updateAt", "content"],
    where: { id: id },
    include: "authorPointer",
    includefilter: {
        user: {
            fields: ['id', 'username']
        }
    }
})

