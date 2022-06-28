import React, { useState, useEffect } from 'react' 
import { Box, Text } from '@chakra-ui/react'
import JSONImages from '../../utils/imagesRepo.json'
import IMAGE1 from '../../assets/Image2.png'

export function Repositories (){
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/leonardo-amaral/repos')
      .then(response => response.json())
      .then(data => {
        const newData = data.map((repo, index) => {
          return {
            ...repo,
           ...(JSONImages[index].id === repo.id && {
              image: JSONImages[index].imagem
           })
          }
        })
        setRepositories(newData)
      })
  }, [])


  return(
    <div className="box-api">
        {
          repositories.map((repositories) => {
            return (
          <div className="repo-box" key={repositories.name}
          >
          <Text color='white' fontSize='24px' fontWeight='800' textTransform='lowerrcase' h='4vh' w='100%' backgroundColor='rgb(40, 40, 125)' textAlign='center' paddingTop='5px'>{repositories.name}</Text>
          <Box bg='black'>
          <img className='image-repo-git' src={repositories.image} alt='preview repo' />
          </Box>
            <div className="box-items">
              <Text w='100%' paddingTop='10px' textAlign='center' bg='rgba(255, 255, 255, 0.8)' h='4vh' color='rgb(40, 40, 125)'>{repositories.language}</Text>
              <Text margin='2%' color='rgb(0, 0, 0, 0.8)'>{repositories.description}</Text>
            </div>
          </div>
        )
      })
    }
  </div>
  )
}