/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'

export default function Message({children, type='default'}) {
    const messages = {
        success: 'border-lime-400 bg-lime-200/10 text-lime-700',
        default: 'border-slate-400 bg-slate-200/10 text-slate-600',
        info: 'border-sky-400 bg-sky-200/10 text-sky-700'
    }

    const message = messages[type] || messages.default

  return (
    <div className= {`p-6 my-6 w-full border font-serif text-xl ${message}`} >
        {children}
    </div>
  )
}

Message.protoType ={
    type: PropTypes.oneOf(['success', 'default', 'info'])
}
