import {string} from './checkstring'

test("check url",()=>{

 expect(string("https://www.google.com/webhp?hl=de&sa=X&ved=0ahUKEwi60ofkiuz0AhW1gs4BHb0yCEMQPAgI")).toBe(true);
})
