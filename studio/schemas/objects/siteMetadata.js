export default {
  name: 'siteMetadata',
  title: 'Site Metadata',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your blog for search engines and social media.'
    },
    {
      name: 'siteUrl',
      type: 'url',
      title: 'Site Url'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your blog.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }
  ]
}
