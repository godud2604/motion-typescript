export type StorageSaveType = {
  id: number
  title: string
  url: string
  updated: string
  kind: string
}

export default class StorageAPI {
  static getAllElements() {
    const elements = JSON.parse(localStorage.getItem('image') || '[]')

    return elements.sort((a: StorageSaveType, b: StorageSaveType) => {
      return new Date(a.updated) > new Date(b.updated) ? -1 : 1
    })
  }

  static saveElement(elementToSave: StorageSaveType) {
    const elements = StorageAPI.getAllElements()
    console.log(elementToSave, elements)
    const existing = elements.find(
      (element: StorageSaveType) => element.id == elementToSave.id
    )

    if (existing) {
      // Edit
      existing.title = elementToSave.title
      existing.url = elementToSave.url
      existing.updated = new Date().toISOString()
    } else {
      // Update
      elementToSave.id = Math.floor(Math.random() * 1000000)
      elementToSave.updated = new Date().toISOString()
      elements.push(elementToSave)
    }

    localStorage.setItem('image', JSON.stringify(elements))
  }

  static deleteElement(id: number) {
    const elements = StorageAPI.getAllElements()
    const newElements = elements.filter(
      (element: StorageSaveType) => element.id != id
    )

    localStorage.setItem('image', JSON.stringify(newElements))
  }
}
