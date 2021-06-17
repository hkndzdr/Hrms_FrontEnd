import React from 'react'
import { Icon, Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
            <Button onClick={signIn} color="google plus" icon labelPosition="left">
            <Icon name="log out" />
            Giriş yap
          </Button>
          <Button style={{marginLeft:'0.5em'}} color="facebook" icon labelPosition="right">
            Kayıt ol
            <Icon name="upload" />
          </Button>  
            </Menu.Item>
        </div>
    )
}