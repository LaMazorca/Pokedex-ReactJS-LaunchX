import { NewtonsCradle } from '@uiball/loaders'

export const Loader = () => {
    return (
        <div className="container-loader">
            <NewtonsCradle 
                size={45}
                speed={1.4} 
                color="black" 
            />
        </div>
    )
}
