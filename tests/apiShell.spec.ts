import { test ,expect} from '@playwright/test';
const { chromium } = require('playwright');
import { defineConfig } from '@playwright/test'
import { config } from 'process';
  test('API Test request', async ({ request }) => {
    // Your test code goes here
    ignoreHTTPSErrors: true;
   
    const response = await request.get('https://any-api.com/ ')

 expect(response.status()).toBe(200)

 const text = await response.text()
 expect(text).toContain('Date')

 //in json form

 console.log(await response.json())

  })

  //post request 
  test('API Test post request', async ({ request }) => {
    // Your test code goes here
    ignoreHTTPSErrors: true;
   
    const response = await request.post('https://swapi.dev/about' ,{

    data:
    {
      "name" :"satyam",
      "job" : "leader"
    }
    })

 expect(response.status()).toBe(201)

 const text = await response.text()
 expect(text).toContain('satyam')

 //in json form

 console.log(await response.json())

  })

  test('API Test put request', async ({ request }) => {
    // Your test code goes here
    ignoreHTTPSErrors: true;
   
    const response = await request.post('https://swapi.dev/about/2' ,{

    data:
    {
      "name" :"shivam",
      "job" : "leader"
    }
    })

 expect(response.status()).toBe(200)

 const text = await response.text()
 expect(text).toContain('satyam')

 //in json form

 console.log(await response.json())

  })

  test('API Test delete request', async ({ request }) => {
    // Your test code goes here
    ignoreHTTPSErrors: true;

    //here id is 2
   
    const response = await request.delete('https://swapi.dev/about/2' ,{

    data:
    {
      "name" :"shivam",
      "job" : "leader"
    }
    })

 expect(response.status()).toBe(204)
  })
  