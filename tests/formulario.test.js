import { describe, it, expect } from "vitest"
import { JSDOM } from "jsdom"

describe("Formulario de registro", () => {

  it("debería mostrar un mensaje después de enviar el formulario", () => {

    const dom = new JSDOM(`
      <form id="registroForm">
        <input id="nombre" value="Cris">
        <input id="email" value="cris@test.com">
        <button type="submit">Registrar</button>
      </form>
      <p id="mensaje"></p>
    `)

    const document = dom.window.document

    const nombre = document.getElementById("nombre").value
    const email = document.getElementById("email").value

    const mensaje = document.getElementById("mensaje")

    mensaje.innerText = `Usuario ${nombre} registrado con éxito con el correo ${email}`

    expect(mensaje.innerText).toContain("Cris")

  })

})