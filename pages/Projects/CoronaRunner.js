import { Container, Badge, Link, List, ListItem, Heading, Center } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/Project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
     <Layout title="Corona Runner">
          <Container>
               <Title>
                    Corona Runner <Badge>2021</Badge>
               </Title>

               <Paragraph>
                    Massively Multiplayer Party Game, Bill Guys Ultimate Knockout is a Obstacle Course Game that inspired by <Link href="https://www.fallguys.com/" target="_blank">Fall Guys</Link> Game.
                    Currently the Game is just a Prototype.
               </Paragraph>
               <Paragraph>
                    The project is using the Unity Universal Render Pipeline template to create high quality graphics and lightly Games.
               </Paragraph>

               <List ml={4} my={4}>
                    <ListItem>
                         <Meta>View</Meta>
                         <Link href="https://github.com/BillyFrcs/CoronaRunner" target="_blank">
                              Corona Runner <ExternalLinkIcon mx="2px" />
                         </Link>
                    </ListItem>

                    <ListItem>
                         <Meta>Platform</Meta>
                         <span>Windows</span>
                    </ListItem>

                    <ListItem>
                         <Meta>Engine</Meta>
                         <Link href="https://unity.com/" target="_blank">
                              Unity<ExternalLinkIcon mx="2px" />
                         </Link>
                    </ListItem>

                    <ListItem>
                         <Meta>Game Status</Meta>
                         <span>Finished</span>
                    </ListItem>
               </List>

               <Heading as="h4" fontSize={16} my={6}>
                    <Center>Gameplay</Center>
               </Heading>

               <ProjectImage src="/gif/CoronaRunner.gif" alt="Corona Runner" />

          </Container>
     </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
