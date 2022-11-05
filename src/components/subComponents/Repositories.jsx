import React, { useState, useEffect } from 'react' 
import { Box, Text } from '@chakra-ui/react'
import JSONImages from '../../utils/imagesRepo.json'
import IMAGE1 from '../../assets/Image2.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

export function Repositories (){
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/leonardo-amaral/repos')
      .then(response => response.json())
      .then(data => {
        const newData = data.map((repo, index) => {
          return {
            ...repo,
           ...(JSONImages[index]?.id === repo?.id && {
              image: JSONImages[index].imagem
           })
          }
        })
        setRepositories(newData)
        console.log(data)
      })
  }, [])
  AOS.init({
    duration: 1000,
    easing: 'ease'
  });

  return(
    <div className="box-api">
        {
          repositories?.map((repositories) => {
            return (
          <div className="repo-box" data-aos="fade-up" key={repositories.name}
          >
          <a href={repositories.html_url} target="new_blank">
          <Text color='white' fontSize='24px' fontWeight='800' textTransform='lowerrcase' h='6vh' w='100%' backgroundColor='rgb(40, 40, 125)' textAlign='center' paddingTop='15px'>{repositories.name}</Text>
          <Box bg='black' overflow='hidden'>
          <img className='image-repo-git' src={repositories.image} alt='preview repo' />
          </Box>
            <div className="box-items">
              <Text w='100%' paddingTop='10px' textAlign='center' fontSize='20px' fontWeight='800' bg='rgba(255, 255, 255, 0.4)' h='4vh' color='rgb(40, 40, 125)'>{repositories.language}</Text>
              <Text fontSize='16px' margin='2%' color="rgba(0,0,0, 0.8)">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.</Text>          
            </div>
            </a>
          </div>
        )
      })
    }
  </div>
  )
}