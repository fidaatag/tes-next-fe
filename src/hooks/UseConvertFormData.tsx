export const UseConvertFormDta = (req: any, status?: string, req_bab?: any) => {

  const menjadiFormData = new FormData()

  // req typenya harus object
  for (const key in req) {
    if (req.hasOwnProperty(key)) {
      const value = req[key]

      if (typeof value === "string" || value instanceof File) {
        menjadiFormData.append(key, value)

      } else if (Array.isArray(value)) {
        value.forEach((item) => {
          menjadiFormData.append(`${key}[]`, item)
        })
      }
    }
  }
  
  if ( status !== undefined ) menjadiFormData.append("status", status)

  if (req_bab && Array.isArray(req_bab)) {
    req_bab.forEach((item) => {
      if (item.hasOwnProperty('section_title')) {
        menjadiFormData.append(`sections[]`, item.section_title)
      }
    })
  }

  return menjadiFormData

}
