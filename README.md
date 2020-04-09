# egg-msg-flash
ctx.flash={
  type:'success',
  message:{
    some:'one'
  }
}

ctx.flash_success({some:'one'})
ctx.flash_error()
ctx.flash_info()
ctx.flash_warning()

//get flash by

ctx.flash