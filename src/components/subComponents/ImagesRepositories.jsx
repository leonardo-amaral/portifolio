import JSON from '../../utils/imagesRepo.json'

export function ImageRepositories (){
  return (
    JSON.map((images) => {
      const Images = images.imagem
      return(
        Images
      )
    })
  )
}