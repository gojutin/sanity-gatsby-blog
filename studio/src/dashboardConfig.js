export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f3173853ccf49e2ea5dd03d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-em5fjon9',
                  apiId: 'e6400230-fbce-4c11-826a-363c5622b9b4'
                },
                {
                  buildHookId: '5f317385065f720db715fc7c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-hfrxw448',
                  apiId: '64d20667-67ec-453d-ac8b-fedfee636d53'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gojutin/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-hfrxw448.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
