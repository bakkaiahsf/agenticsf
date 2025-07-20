// src/lib/fetch.ts

export async function getCourses() {
    const res = await fetch('https://agenticsf.in/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            posts {
              nodes {
                id
                title
                excerpt
              }
            }
          }
        `,
      }),
    });

    const json = await res.json();
    return json.data;
}
