require 'open-uri'

use Rack::Static,
  :urls => ["/js", "/css", "bower_components"],
  :root => "public",
  :index => "index.html"

class HNProxy
  def call(env)
    open("http://api.ihackernews.com/page") {|f|
      [200, {"Content-Type" => "application/json"}, [f.read]]
    }
  end
end

map '/hnproxy' do
  run HNProxy.new
end

run Rack::File.new("public")
