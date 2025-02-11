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
          <section className='p-8 flex flex-col gap-2 min-h-[50svh]'>
            <p className='py-4 text-xl text-center'>
              Veniam cillum nisi consectetur Lorem id elit reprehenderit proident.
            </p>
            <p className='py-4 text-xl text-center'>
              Reprehenderit sit labore pariatur Lorem velit id labore reprehenderit ullamco ad veniam consectetur. Cillum ea ea aliqua ipsum sit. Laborum irure et laborum nisi labore velit veniam mollit cupidatat non fugiat. Nulla et cillum ut consectetur aliqua sit consequat. In aliquip irure incididunt nostrud ut deserunt do dolor voluptate velit fugiat. Ullamco culpa duis in incididunt. In commodo nostrud consequat aliquip officia sit dolore non deserunt culpa consectetur elit.
            </p>
          </section>
          <section className='p-8 flex flex-col gap-2 min-h-[50svh]'>
            <p className='py-4 text-xl text-center'>
              Veniam cillum nisi consectetur Lorem id elit reprehenderit proident.
            </p>
            <p className='py-4 text-xl text-center'>
              Reprehenderit sit labore pariatur Lorem velit id labore reprehenderit ullamco ad veniam consectetur. Cillum ea ea aliqua ipsum sit. Laborum irure et laborum nisi labore velit veniam mollit cupidatat non fugiat. Nulla et cillum ut consectetur aliqua sit consequat. In aliquip irure incididunt nostrud ut deserunt do dolor voluptate velit fugiat. Ullamco culpa duis in incididunt. In commodo nostrud consequat aliquip officia sit dolore non deserunt culpa consectetur elit.
            </p>
          </section>
          <section className='p-8 flex flex-col gap-2 min-h-[50svh]'>
            <p className='py-4 text-xl text-center'>
              Veniam cillum nisi consectetur Lorem id elit reprehenderit proident.
            </p>
            <p className='py-4 text-xl text-center'>
              Reprehenderit sit labore pariatur Lorem velit id labore reprehenderit ullamco ad veniam consectetur. Cillum ea ea aliqua ipsum sit. Laborum irure et laborum nisi labore velit veniam mollit cupidatat non fugiat. Nulla et cillum ut consectetur aliqua sit consequat. In aliquip irure incididunt nostrud ut deserunt do dolor voluptate velit fugiat. Ullamco culpa duis in incididunt. In commodo nostrud consequat aliquip officia sit dolore non deserunt culpa consectetur elit.
            </p>
          </section>
        </Content>
      </Main>
    </Layout>
  )
}

export default App
