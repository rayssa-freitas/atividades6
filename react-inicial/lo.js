const [login, setLogin] = useState('')
const [senha, setSenha] = useState('')

<input type="text" placeholder='Digite login' 
value={login}
onChange={(event) => setLogin(event.target.value)} />

<input type="passwaord" placeholder='Digite senha' 
value={senha}
onChange={(event) => setSenha(event.target.value)} />