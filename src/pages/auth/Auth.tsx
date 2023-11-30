import {Grid, Header, Form, Segment, Button} from "semantic-ui-react";
import {useMutation} from "@tanstack/react-query";
import {mutationLogin} from "./mutation.ts";
import {useEffect, useRef} from "react";

export const Auth = () => {

  /*const renderCounter  = useRef(0);
  renderCounter.current = renderCounter.current + 1;
  console.log(renderCounter)*/


  const {data, mutate} = useMutation({
    mutationKey: ['login'],
    mutationFn: mutationLogin,
  })

  const handleLogin = () => {
    mutate();
  }

  useEffect(() => {
    // console.log(`Data is ${data}`)
    if (data) {
      localStorage.setItem('guest_session_id', data?.guest_session_id)
    }
  }, [data])


  return (
      <Grid
          textAlign={'center'}
          verticalAlign={'middle'}
          style={{height: "100vh"}}
      >
        <Grid.Column style={{maxWidth: 450}}>
          <Header
              as={'h2'}
              color={'violet'}
              textAlign={'center'}
          >
            Sing in
          </Header>
          <Form size={'large'}>
            <Segment stacked>
              <Button
                  onClick={handleLogin}
                  color={'violet'}
                  size={'large'}
                  fluid
              >Sing in</Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
  );
};