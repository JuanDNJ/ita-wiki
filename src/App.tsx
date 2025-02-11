import { FC } from 'react'
import { Navigation } from './components/navigation/Navigation';
import { Welcome } from './components/welcome/Welcome';
import { Features } from './components/features/Features';
import { Layout } from './layouts/Layout';
import { Main } from './layouts/Main';
import { Aside } from './layouts/Aside';
import { Content } from './layouts/Content';
import { MainHeader } from './layouts/MainHeader';


const App: FC = () => {

  return (
    <Layout>
      <MainHeader />
      <Main>
        <Aside>
          <Navigation />
        </Aside>
        <Content>
          <Welcome />
          <Features />
        </Content>
      </Main>
    </Layout>
  )
}

export default App
