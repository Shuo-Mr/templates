import path from 'path'
import { mergeConfig, defineConfig } from 'vite'
import { createBaseConfig } from '../../.config/vite.config.base'
// @ts-ignore
import pxtorem from 'postcss-pxtorem'

// https://vitejs.dev/config/
export default mergeConfig(
    createBaseConfig({
        appRootPath: path.resolve('./'),
        appName: '{{appName}}'
    }),
    defineConfig({
        css: {
            postcss: {
                plugins: [
                    pxtorem({
                        rootValue: 37.5,
                        propList: ['*']
                    })
                ]
            }
        }
    })
)
