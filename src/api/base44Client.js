export const base44 = {
entities: {
Location: {
async list() { return [] },
async create(data) { return data },
async delete(id) { return true },
async bulkCreate(arr) { return arr },
async update(id, data) { return data }
}
}
}