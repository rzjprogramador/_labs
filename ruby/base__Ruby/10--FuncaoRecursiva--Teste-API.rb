require 'byebug'
require 'net/http'
require 'active_support/all'
require 'httparty'

def captura_servico(i = 1)

    uri = URI("https://jsonplaceholder.typicode.com/todos/")
    request = Net::HTTP.get_response(uri)

    x = ""
end

captura_servico