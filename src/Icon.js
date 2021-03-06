import React from 'react'

const ImgAlipay = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAgCAIAAAD47T2eAAAD4UlEQVR4AbxXA5DsWBTN2rZtldYqrL1bXtu2bdtm2mPbtm00Xmz03vykO/M7g8zH3DpVlXo6F+chWHydkbL2fjezmz+MedAW3o0FLLJ3IPx1P8spmrm+QdNHKWfkI+y/GOZFmxJ47MJiNMaqBk1UVE/OjWH/bUoCG/+hcwoRI+vYI02k+zhgpAXcPVPs0z4W29YbdjlhpyDxcqfw1aD45aD4YifvPqb9Q/OY29EedHQOySpx04YZdQvXNFtDJFu4pjkqh4xJuknTQ6nYRtJAy9a+VGzlRcfn2jS9lLqN0e6ESxocnZpPdZJqCtpJtZ9WVYslLmpxaHQifVreOUhgnhVpPOigTPKlTv5FBz7pF3jVogmLmnPMy538fc3cdn4XNCaTIdl/YtjfC/BXbO90IppIGjgOjan419D66iRwbRVzXxN3bwL3NHKvdPGSZkUTETWz985G9o4GA3c3siBFMw7XNB6ET0jDrDa0AIOM1kNr3RQAPoyWAUZT9HjSziuhMXyVgt4xSOwaWhZB4pAscpSzAuyi1O0DxGqiwaE2VqLND/vbg5KAxuuqWSAxDepvFsYFjcfASfnU423c3+NS2rQcmpJ/GxVf6RKur2ZPzqN2BH//Q+aZtqUHZc/KJgcl68fmkNDoggZHB2SQv45KZp2dxqtGZv4YlW6pZ4/MIi8up+VEYX4dk2yO5WjgIkojmpGxLxpi6gd9Akjrpnr2oWbuk36xZF4hjSVtA2VHEu6ERf3wbDjm3dDg6LthEdaC5MApYlYiWZstveiILBIUXBFWVD01ymlBe6qdOy6Xsm4KfCkaDzo40zivwH1Y1B7h2LNb+dD5JXRVRIk7jFH0wjnl4RZ+PT6PTWM0XVrBzAoayBQ6lr+jICw4nuNLG6SkLKw83yGcWUTvAJIBsn/nbZqopO2XQQLNMhyn5VO9tFUSWtFvb+BAhLBtnWTm8dpHqz+PSPc3MXbSYNrbPYIZrCNdhnxBYLOCVRkk6zdUQ4YN7j1CxK31bHlYUfTF4+OUuC2BzwZEaPq4Xzg8a11MOMCg3ClAXFrOZM7IyWm9tHphKQPcKWW7oIT+cVicE1LZIqJuC3qPIFEwZ6wFWiiaV0B4nwwI3kmpd0ElBC3+04gI22tx+eIG4AR6oo1vRKqTxhq0c4B4s1sALTgDBx//GpfOK6aT+gEso8nt/cRl5cw/4xI4zUDSnGXYN528pop5toP/qE8EPNnGX1nJ7JdOms66f6KYZT4im7y5lko8oJwjDMBH4tuzwW9PtJtvzvEc3OSA52Avu0aPW/OpLm/up7rzx2NTEHhi/w/Y8ZiM1PEAAFr6Mn6ueymXAAAAAElFTkSuQmCC'
const ImgWechat = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAEVklEQVR4Aa1WA5ArWRRNaYvrHWvt3Tj5tm3btm3bVtIY27Zt2zY7+Xd+z39RV4a3bnU99Dvn4Yol/ywJValX4h6v8zq43uvQgBWWA0h8VSqC7SZo6mg+HHrJjBiuh3ENcIFCCVC6oTyofYSvi3HNyOGHQi8DbDcBRVH7Q85/J/nPhBSbksOGRI1J0beS/wCWkslY4eUxxrhIG/qAiAHQGBeHVcSyNvsf0cf5DLsgRHoYT0fK1pFyPikbzm5ICPrOAbAAzhpru8iIEClPGBFCHYzzj9WkFd67L8c8fJVGvku3vJf4ek/w2bGOi41woR7OM+kDgREpHGO7kDXebokygS7GY1tPuZfwOr+hWK4h8G5eRUErvHbpY3w4Yi8EhHC83WIlAnNA5y7y3JZdny/XKpSMep9m+av5GENC2A8CXZy31GtHQ3ujvG/iXuD/s/koOEefCKDDsZ5W0NhzLa1dbXBLR8IuV7RUIcToisTtgSdsc9zQyJOkD3ClfSIAO7kT/xKtTK7J+EHC/uLNL675vmhwe+BJ1kvDKc4r4YrokU6qc7LzCvCvXgjA+H42HwmgCKuD6gDLuRrzqLatHg2m1WadiLjuVxwK7eq2Gggt4WWxcKav3v+tg7E/WbAYlIEADFZkN7uuvaEvV59ak3k56uGZ8NuvkgmHHA94CSzD7nj4tdGOC8Fv4NkZCXgjHOY3dbZoh5bJZS+T8eOh12Irk6GtNgvWIUm35tpMBy9RJ4A49Y/VxOKmMu0ETxLfP036gKAZJbMub7Lzctix+iPrYzz7XA8tKwOKw2/EPkPd+vaGDqoTdRs7mtq62ul2dn0e13oaoIMnA/hnApw/130j+klNumRd5yLuIpPNbSjg28zYFXSaNqfqttpxDkuWe+1Cy1+kYHoYBwhUHA2SwY24p4wEOQ0Fd+NeoW5ZS+VK7z1g1jKZjN7+1oBjpyNvoTMVNZX+bTUBbl6FwJgUG+KC+wlvwEbVCEJKo/B0e8aHZ+wCwiTn5bo4F8AVBDTH95L/X6TgmgTSNFt5n6W9q32801IGAlDIebQrhZXFOOR5ptVkVbbWRFUmXI153HeCzLrc3yzGGBB8xRUhyx3pMN+7KGiT/xEzoju4/mI+imszjWs7baT9/JrWuj4SnIu8oyvlqJgpynO/W46FsKGLcaBNj9ChEEbORt7pC7pXYeBP5AgTUqROgDhAGXOsIS6EvEZbDqPAlHdh0D+WE+nMykygPY9DItvgdyi6IoGRprG9SWAzE2X4/hKgnMqFG1jgsflSzENJmjWZ6XA34dU6vwMnI24UNpZuCjgC/qREsIQh6ffpKHhPwQF83V+c+4OUI7CdOdV1lbLJADiULUfRoQasCBHCtUrZ4neEFV4RiwqvIVQABNjw8lgWVHdDXjoC1Hc9pSOlXvxCOAI1GIQCCEABYE/xi4wMau7LcQ/X+Oxb67N/LXyZG6itMoIaq733XYp9GF+VgmA/Agzg7iAFYhPkAAAAAElFTkSuQmCC'
const iconStyle = {
  display: 'inline-block',
  width: '1em',
  height: '1em',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left center',
  backgroundSize: '100% 100%',
  marginLeft: '0.5em',
}

export const IconAlipay = () => {
  const styles = {
    ...iconStyle,
    backgroundImage: `url('${ImgAlipay}')`,
  }
  return <span style={styles}/>
}

export const IconWechat = () => {
  const styles = {
    ...iconStyle,
    backgroundImage: `url('${ImgWechat}')`,
  }
  return <span style={styles}/>
}
