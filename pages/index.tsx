import Layout from 'components/Layout';


export default function Page() {
  return (
    <Layout>
        Random number: {Math.random()}
        <form>
        <input type="submit" value="Generate"/>
      </form>
    </Layout>
  )
}