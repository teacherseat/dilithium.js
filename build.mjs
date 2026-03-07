import esbuild from 'esbuild'
import { readFile } from 'fs/promises'
import { compile } from 'coffeescript'

const coffeePlugin = {
  name: 'coffeescript',
  setup(build) {
    build.onLoad({ filter: /\.coffee$/ }, async (args) => {
      const source = await readFile(args.path, 'utf8')
      const contents = compile(source, { bare: true })
      return { contents, loader: 'js' }
    })
  }
}

const entryPoints = [
  'src/index.coffee',
  'src/api/api.coffee',
  'src/attribute/attribute.coffee',
  'src/attribute_array/attribute_array.coffee',
  'src/attribute_model_array/attribute_model_array.coffee',
  'src/location/location.coffee',
  'src/base/base.coffee',
  'src/component/component.coffee',
  'src/events/events.coffee',
  'src/model/model.coffee',
  'src/util/util.coffee',
  'src/view/view.coffee',
  'src/field/field.coffee',
  'src/form/form.coffee',
  'src/popup/popup.coffee',
  'src/field_checkbox/field_checkbox.coffee',
  'src/field_err/field_err.coffee',
  'src/field_file/field_file.coffee',
  'src/field_input_password/field_input_password.coffee',
  'src/field_input_text/field_input_text.coffee',
  'src/field_radio/field_radio.coffee',
  'src/field_select/field_select.coffee',
  'src/field_textarea/field_textarea.coffee',
  'src/collection/collection.coffee',
  'src/list/list.coffee',
  'src/member/member.coffee',
  'src/show/show.coffee',
]

const config = {
  entryPoints,
  bundle: false,
  outdir: 'build',
  outbase: 'src',
  format: 'cjs',
  plugins: [coffeePlugin],
}

const isWatch = process.argv.includes('--watch')

if (isWatch) {
  const ctx = await esbuild.context(config)
  await ctx.watch()
  console.log('watching for changes...')
} else {
  await esbuild.build(config)
  console.log('build complete')
}
